const load = (target, data) => {
    const jsonData = require(`../${ data }/data.json`);
    Object.assign(target, jsonData);
};

export default load;