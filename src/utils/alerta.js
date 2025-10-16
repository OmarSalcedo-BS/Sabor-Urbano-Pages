export function alertaGeneral({
	title = 'Sabor Urbano',
	imageUrl = '/./public/LogoPrincipal.jpg',
	timer = 1200,
	imageWidth = 180,
} = {}) {
	
	if (document.getElementById('saborurbano-alert-overlay')) return;

	const overlay = document.createElement('div');
	overlay.id = 'saborurbano-alert-overlay';
	Object.assign(overlay.style, {
		position: 'fixed',
		inset: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255,255,255,0.95)',
		zIndex: '9999',
		transition: 'opacity 0.25s ease',
		opacity: '1',
	});

	const card = document.createElement('div');
	Object.assign(card.style, {
		width: 'min(90%, 420px)',
		background: '#fff',
		borderRadius: '12px',
		boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
		padding: '18px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '12px',
	});

	const imgEl = document.createElement('img');
	imgEl.src = imageUrl;
	imgEl.alt = title;
	Object.assign(imgEl.style, {
		width: imageWidth + 'px',
		height: 'auto',
		borderRadius: '10px',
		boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
	});

	const h = document.createElement('div');
	h.textContent = title;
	Object.assign(h.style, {
		fontSize: '1.3rem',
		fontWeight: '700',
		color: '#222',
		textAlign: 'center'
	});

	const progressWrap = document.createElement('div');
	Object.assign(progressWrap.style, {
		width: '100%',
		height: '8px',
		background: '#eee',
		borderRadius: '6px',
		overflow: 'hidden',
		marginTop: '6px'
	});

	const progress = document.createElement('div');
	Object.assign(progress.style, {
		width: '0%',
		height: '100%',
		background: 'linear-gradient(90deg, #ff6b00, #ffd700)',
		transition: 'width 50ms linear'
	});

	progressWrap.appendChild(progress);

	const info = document.createElement('div');
	info.textContent = '';
	Object.assign(info.style, { fontSize: '0.9rem', color: '#444' });

	card.appendChild(imgEl);
	card.appendChild(h);
	card.appendChild(progressWrap);
	card.appendChild(info);
	overlay.appendChild(card);
	document.body.appendChild(overlay);

	// Progreso basado en timer
	const start = performance.now();
	let rafId = null;

	function update(now) {
		const elapsed = now - start;
		const pct = Math.min(100, (elapsed / timer) * 100);
		progress.style.width = pct + '%';
		if (pct < 100) rafId = requestAnimationFrame(update);
		else finish();
	}

	function finish() {
		if (rafId) cancelAnimationFrame(rafId);
		overlay.style.opacity = '0';
		setTimeout(() => {
			if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
		}, 260);
		window.removeEventListener('keydown', onKey);
		overlay.removeEventListener('click', onClick);
	}

	function onKey(e) {
		if (e.key === 'Escape') finish();
	}

	function onClick(e) {
		// click fuera del card cierra
		if (e.target === overlay) finish();
	}

	window.addEventListener('keydown', onKey);
	overlay.addEventListener('click', onClick);
	rafId = requestAnimationFrame(update);
}

if (typeof window !== 'undefined') window.alertaGeneral = alertaGeneral;
