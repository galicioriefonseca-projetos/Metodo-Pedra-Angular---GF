/**
 * Utilitário de navegação segura para evitar restrições de popup / iframe / sandbox
 * em navegadores e ambientes de hospedagem.
 */

export function openExternalLink(url: string): void {
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    // Fallback caso a manipulação de DOM falhe
    window.location.href = url;
  }
}
