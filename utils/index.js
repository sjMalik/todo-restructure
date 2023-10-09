const FormatData = (data) => {
    if ((typeof data === 'object' && data) || Array.isArray(data)) {
        return { data };
    }
    throw new Error('Data Not Found');
};

module.exports = FormatData;
