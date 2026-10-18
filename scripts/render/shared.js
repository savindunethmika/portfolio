/** Wraps each label in a <span> for the `.tech-tags` row. */
export function techTags(labels) {
  return labels.map((label) => `<span>${label}</span>`).join('');
}

/** An external link styled as a primary button. */
export function linkButton({ href, icon, label }) {
  return `
    <a href="${href}" target="_blank" rel="noopener noreferrer" class="btn primary-btn">
      <i class="${icon}"></i>
      ${label}
    </a>
  `;
}

/**
 * Cards are rendered via innerHTML, so image failures are handled with one
 * delegated listener (error events don't bubble, hence `capture`).
 * A failed image swaps to the card's fallback icon.
 */
export function enableImageFallbacks(container) {
  const showFallback = (img) => img.closest('.card-image')?.classList.add('is-fallback');

  container.addEventListener('error', (event) => {
    if (event.target.tagName === 'IMG') showFallback(event.target);
  }, true);

  // Catch images that already failed before the listener was attached.
  container.querySelectorAll('img').forEach((img) => {
    if (img.complete && img.naturalWidth === 0) showFallback(img);
  });
}
