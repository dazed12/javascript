const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
                 name: "HR",
                parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
  ]

//   const checkArray = function (company, counter = "") {
//     company.forEach((comp) => {
//       console.log(`${counter}${counter === "" ? "" : " "}${comp.name} (${comp.users_count})`);
//       if (comp.children) {
//         counter += "--";
//         checkArray(comp.children, counter);
//         counter = counter.slice(0, -2);
//       }
//     });
//   };
//   checkArray(company)
// console.log('==========================================')

//   const format = (children, i = 2, pre = ' ', pre1 = ' ') => children.map(({name, users_count, children}) => {
//     //recursive call
//     if (Array.isArray(children)) return `${pre}${name}${pre1}${users_count}\n${format(children, i, `${pre || '|'}${'-'.repeat(i)}`)}`
//     return `${pre}${name}${pre1}${users_count}`
//   }).join('\n')
//   console.log(format(company))

// console.log('==========================================')

// let a=""
// let res ="";
// const getFun = function (tr, a)
// {
//   res += a + `${tr.name}(${tr.users_count})\n`;  
//   if(!tr.children)
//     return `${tr.name}(${tr.users_count})\n`;                   
//   for (let i=0; i < tr.children.length; i++){
//     getFun(tr.children[i], a + "--");
//    }   
//   return res;                             
// }
// console.log(getFun(company[0], a))

console.log('==========================================')

const printNode = (node, acc) => console.log(`${'--'.repeat(acc)}${acc > 0 ? ' ' : ''}${node.name} (${node.users_count})`);
const printTree = (tree = company, acc = 0) => {
  tree.forEach(node => {
      printNode(node, acc);
      if (Object.hasOwn(node,'children')) {
          printTree(node.children, newAcc = acc + 1);
      }
  })
};
printTree();


console.log('==========================================')

function buildTree1(tree, prefix) {
  if (typeof prefix === 'undefined')
    prefix = '';
  let result = '';

  tree.forEach(function(e, i) {
    let lastNode = i == tree.length - 1;
    result += prefix + (lastNode ? ' ' : '') + ' ' + e.name + ' (' + e.users_count + ')'  + '\n';
    if (e.children)
      result += buildTree1(e.children, prefix + (lastNode ? '-' : '-') + '-');
  });
  return result;
}
console.log(buildTree1(company))

console.log('==========================================')
// Вариант 2 (другое оформление)
function buildTree2(tree, prefix) {
  if (typeof prefix === 'undefined')
    prefix = '';
  let result = '';

  tree.forEach(function(e, i) {
    let lastNode = i == tree.length - 1;
    result += prefix + (lastNode ? '└' : '├') + ' ' + e.name + ' (' + e.users_count + ')'  + '\n';
    if (e.children)
      result += buildTree2(e.children, prefix + (lastNode ? ' ' : '|') + ' ');
  });
  return result;
}
console.log(buildTree2(company))
console.log('==========================================')

function letShowMustGoOn (data, prefix = '') {
  for (const object of data) {

    let formattedPrefix = (prefix) ? prefix + ' ' : ''

    console.log(`${formattedPrefix}${object.name} (${object.users_count})`)

    for (const objectPropertyValue of Object.values(object)) {
      if (!Array.isArray(objectPropertyValue)) continue
      letShowMustGoOn(objectPropertyValue, prefix + '--')
    }
  }
}

letShowMustGoOn(company)
console.log('==========================================')

function treeView(array, print) {
  for (let entry in array) {
      if (array[entry].parent == null) {
          console.log(array[entry].name + ' (' + array[entry].users_count + ')');
      }
      else {
          console.log(print + array[entry].name + ' (' + array[entry].users_count + ')');
      }
      treeView(array[entry].children, print + '——');
  }
  return null;
}

treeView(company, '');