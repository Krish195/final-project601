import { test, expect } from '@playwright/test';

test('navbar should have a logo', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const logo = await page.isVisible('img[alt="logo"]');
  expect(logo).toBe(true);
});

test('clicking the home link in navbar', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Home');
  // Add assertion relevant to clicking the home link
  // e.g., await expect(page).toHaveURL('http://localhost:3000/#home');
});

test('clicking the menu link in navbar', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Menu');
  await expect(page).toHaveURL('http://localhost:3000/#feature');
});

test('clicking the contact link in navbar navigates to the footer', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Contact');
  await expect(page).toHaveURL('http://localhost:3000/#footer');
});

test('clicking the testimonial link in navbar', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Testimonial');
  await expect(page).toHaveURL('http://localhost:3000/#testimonial');
});


test('hero section has the background image', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const bgImage = await page.isVisible('img[alt="hero_bg"]');
  expect(bgImage).toBe(true);
});

test('hero section contains specific text', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Use a more specific locator for the text element
  await expect(page.locator('text=The only place in New Jersey which serves the')).toContainText('The only place in New Jersey which serves the');
  await expect(page.locator('text=Indian Food')).toContainText('Indian Food');
});

test('check for special christmas discounts text', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Again, use a more specific locator for the text element
  await expect(page.locator('text=Get special christmas discounts upto 50%')).toContainText('Get special christmas discounts upto 50%');
});

test('menu link in hero section navigates to the feature section', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Check Out the Menu');
  await expect(page).toHaveURL('http://localhost:3000/#feature');
});

test('hero section is visible on page load', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const heroVisible = await page.isVisible('.container');
  expect(heroVisible).toBe(true);
});


/*-------------------------------------------------------------------------------------------------------------------*/


test('Chhole Bhature text is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const text = page.locator('text=Delicious Chhole with Delhite Flavors');
  await expect(text).toBeVisible();
});

test('Halwa text description is correct', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const description = page.locator('text=Mom made Halwa. Poured with love.');
  await expect(description).toBeVisible();
});

test('Biryani description includes spices', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const text = page.locator('text=Royal Indian Taste. Marinated with 32 different spices.');
  await expect(text).toBeVisible();
});

test('featured section has correct heading', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const heading = page.locator('text=Signature Items');
  await expect(heading).toBeVisible();
});



/*-------------------------------------------------------------------------------------------------------------------*/

test('contact section has the correct address', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const address = page.locator('text=123 Main Street, New Jersey, NJ 10001');
  await expect(address).toBeVisible();
});

test('contact section has the correct phone number', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const phoneNumber = page.locator('text=(123) 456-7890');
  await expect(phoneNumber).toBeVisible();
});

test('contact section has the correct email', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const email = page.locator('text=info@luxuryrestaurant.com');
  await expect(email).toBeVisible();
});

test('social media links are visible and correct', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('a[href="https://www.facebook.com"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.twitter.com"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.instagram.com"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.linkedin.com"]')).toBeVisible();
});



test('newsletter form has correct Mailchimp action URL', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Select the form based on the action attribute containing the Mailchimp URL
  const form = page.locator(`form[action="${'https://njit.us17.list-manage.com/subscribe?u=6a42477c338ef53fa8019afe8&id=05a5c59220'}"]`);
  
  // Check if the form is visible on the page
  await expect(form).toBeVisible();
  
  // Verify that the form's action attribute matches the expected Mailchimp URL
  await expect(form).toHaveAttribute('action', 'https://njit.us17.list-manage.com/subscribe?u=6a42477c338ef53fa8019afe8&id=05a5c59220');
});


test('footer is present with copyright text', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Locator for the footer section by its id
  const footerSection = page.locator('section#footer');
  await expect(footerSection).toBeVisible();

  // Locator for the copyright text within the footer
  const copyrightText = page.locator('section#footer >> text=/© 2023 All rights reserved/');
  await expect(copyrightText).toBeVisible();
});