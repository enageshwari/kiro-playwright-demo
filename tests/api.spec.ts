import { test, expect } from '@playwright/test';

/**
 * API-level tests for the Express server.
 * These verify the server responds correctly without going through the browser UI.
 */
test.describe('Kiro Server — API Tests', () => {
  test('should serve the HTML page with a 200 status', async ({ request }) => {
    const response = await request.get('/');
    expect(response.status()).toBe(200);
  });

  test('should return HTML content type', async ({ request }) => {
    const response = await request.get('/');
    expect(response.headers()['content-type']).toContain('text/html');
  });

  test('should return 404 for unknown routes', async ({ request }) => {
    const response = await request.get('/this-route-does-not-exist');
    expect(response.status()).toBe(404);
  });

  test('should include the app title in the HTML response', async ({ request }) => {
    const response = await request.get('/');
    const body = await response.text();
    expect(body).toContain('<title>Kiro App</title>');
  });
});
