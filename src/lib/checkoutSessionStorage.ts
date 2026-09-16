export function saveCheckoutState(state: Record<string, unknown>) {
  try {
    sessionStorage.setItem('nexus_checkout_ctx', JSON.stringify(state));
  } catch (e) {
    console.warn('Session storage quota exceeded or unavailable', e);
  }
}
