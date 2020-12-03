const { Component } = require('@serverless/core')

/**
 * Will deploy the serverless component
 */
class Deploy extends Component {
    async default(inputs = {}) {
        const { stage } = inputs
        if (!stage) this.context.log('Please pass a stage using --stage')
        const template = await this.load('@serverless/template', stage)
        const output = await template({ template: 'serverless.yml' })
        return output
    }

    // Remove will allow the stage to be set on the command line
    // run like so: serverless remove --stage=staging
    async remove(inputs = {}) {
        const { stage } = inputs
        if (!stage) this.context.log('Please pass a stage using --stage')
        const template = await this.load('@serverless/template', stage)
        const output = await template.remove()
        return output
    }
}

module.exports = Deploy
