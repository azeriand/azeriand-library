// CSS injection utility to automatically include component styles
let injectedStyles = new Set<string>();

export function injectCSS(css: string, id: string): void {
  if (typeof document === 'undefined' || injectedStyles.has(id)) {
    return; // Skip in SSR or if already injected
  }

  const style = document.createElement('style');
  style.setAttribute('data-component-css', id);
  style.innerHTML = css;
  document.head.appendChild(style);
  injectedStyles.add(id);
}
