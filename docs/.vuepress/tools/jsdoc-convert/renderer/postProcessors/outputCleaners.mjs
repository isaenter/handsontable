const clearEmptyOptionHeaders = text => text.replace(/## 选项\n## 成员/g, '## 成员');
const clearEmptyMembersHeaders = text => text.replace(/## 成员\n## 方法/g, '## 方法');
const clearEmptyDescriptionHeaders = text => text.replace(/## 描述\n*## 成员/g, '## 成员');
const clearEmptyFunctionsHeaders = text => text
  .replace(/(## 方法\n)+$/g, '\n')
  .replace(/(## 方法\n## 方法\n\n## 描述)/g, '## 描述')
  .replace(/(\n## 方法)+/g, '\n## 方法');

export const outputCleaners = [
  clearEmptyOptionHeaders,
  clearEmptyMembersHeaders,
  clearEmptyFunctionsHeaders,
  clearEmptyDescriptionHeaders,
];
