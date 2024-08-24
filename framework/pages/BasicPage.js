export class BasicPage {
  constructor({ page }) {
    this.page = page
  }

  async visit() {
    await this.page.goto(this.url)
  }
}
