describe('メールアドレスの入力フォームのテスト', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.visit('/signup')
  })

  it('適切な値が入力された場合、エラーメッセージを表示しない', () => {
    cy.get('.email-input').type('test@example.com')
    cy.get('.errormessage-email').should('not.be.visible')
  })

  it('空の値が入力された場合、エラーメッセージを表示する', () => {
    cy.get('.email-input').clear().blur()
    cy.get('.errormessage-email').should('contain', 'メールアドレスを入力してください');
  })

  it('無効な値が入力された場合、エラーメッセージを表示する', () => {
    cy.get('.email-input').type('invalid-email')
    cy.get('.errormessage-email').should('contain', '有効なメールアドレスを入力してください')
  })
})