import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('createIssue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  } 
  beforeEach(() => {
    cy.api_deleteAllProjects()
    cy.login()
    cy.api_createProject(issue.project)
  })
  it('Create a Issue', () => {
    cy.gui_createIssue(issue)

    cy.contains(issue.title).should('be.visible')
    cy.contains(issue.description).should('be.visible')
  })
})