/* eslint-env jest */

const axe = require('../../../lib/axe-helper')

const { render, getExamples } = require('../../../lib/jest-helpers')

const examples = getExamples('timeout-dialog')

describe('Page Heading', () => {
  describe('by default', () => {
    it('passes accessibility tests', async () => {
      const $ = render('timeout-dialog', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
      expect($('meta[name="hmrc-timeout-dialog"]').attr('data-language')).toBe('')
    })
    it('renders in welsh', async () => {
      const $ = render('timeout-dialog', examples['welsh-language'])

      expect($('meta[name="hmrc-timeout-dialog"]').attr('data-language')).toBe('cy')
    })
  })
})
