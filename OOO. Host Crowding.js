// Airbnb Online Assessment

// Input 
// const results = [
//     '1,28,300.6,San Francisco',
//     '4,5,209.1,San Francisco',
//     '20,7,203.4,Oakland',
//     '6,8,202.9,San Francisco',
//     '6,10,199.8,San Francisco',
//     '1,16,190.5,San Francisco',
//     '6,29,185.3,San Francisco',
//     '7,20,180.0,Oakland',
//     '6,21,162.2,San Francisco',
//     '2,18,161.7,San Jose',
//     '2,30,149.8,San Jose',
//     '3,76,146.7,San Francisco',
//     '2,14,141.8,San Jose'
// ];
// const resultsPerPage = 5;

// Output
// const output = [
//     '1,28,300.6,San Francisco',
//     '4,5,209.1,San Francisco',
//     '20,7,203.4,Oakland',
//     '6,8,202.9,San Francisco',
//     '7,20,180.0,Oakland',
//     '',
//     '6,10,199.8,San Francisco',
//     '1,16,190.5,San Francisco',
//     '2,18,161.7,San Jose',
//     '3,76,146.7,San Francisco',
//     '6,29,185.3,San Francisco',
//     '',
//     '6,21,162.2,San Francisco',
//     '2,30,149.8,San Jose',
//     '2,14,141.8,San Jose'
// ];

// Complete the paginate function below.
function paginate(resultsPerPage, results) {
    let output = [];
    const existInList = (target, list) => {
        return list.find(host => host[0] === target[0]);
    };
    const resultsArray = results.map(result => result.split(','));
    let pendingList = [];
    let currentPage = [];
    for (const result of resultsArray) {
        if (currentPage.length === resultsPerPage) {
            output = output.concat(currentPage, '');
            currentPage = [];
        }
        // 先检查 pendingList
        if (pendingList.length) {
            // 创建一个 pendingList 的拷贝
            const tempPendingList = [...pendingList];
            for (const pendingResult of pendingList) {
                // 本页还没有 就加上
                if (!existInList(pendingResult, currentPage)) {
                    currentPage.push(pendingResult);
                    const index = tempPendingList.indexOf(pendingResult);
                    tempPendingList.splice(index, 1);
                    if (currentPage.length === resultsPerPage) break;
                }
            }
            pendingList = tempPendingList;
        }
        // 检查是否满了
        if (currentPage.length === resultsPerPage) continue;

        // 本页已有
        if (existInList(result, currentPage)) {
            pendingList.push(result);
        } else {
            // 本页无，加入本页
            currentPage.push(result);
        }
        // 检查是否满了
        if (currentPage.length === resultsPerPage) continue;
    }

    // 全部遍历完后，pendingList 非空，直接加上
    if (pendingList.length) {
        for (let pendingResult of pendingList) {
            if (currentPage.length === resultsPerPage) {
                output = output.concat(currentPage, '');
                currentPage = [];
            }
            if (currentPage.length < resultsPerPage) {
                currentPage.push(pendingResult);
            }
        }
    }

    // 补上剩下的
    if (currentPage.length) {
        output = output.concat(currentPage);
    }

    // 去掉最后的 ''
    if (output[output.length - 1] === '') output.pop();
    return output.map(record => (record.length ? record.join(',') : record));
}
