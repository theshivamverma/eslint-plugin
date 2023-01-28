module.exports = {
  meta: {
    messages: {
      customMessageId: "Component name should start with capital",
    },
    type: "problem",
    schema: []
  },
  create(context) {
    return {
      Program(node) {
        const fileNamePath = context.getFilename();
        const fileName = fileNamePath.split("/")[fileNamePath.split("/").length - 1];
        if(fileName.endsWith(".jsx") && (fileName.charCodeAt(0) >= 97 && fileName.charCodeAt(0) <= 122)){
          context.report({
            node,
            messageId: "customMessageId"
          })
        }
      }
    }
  }
}