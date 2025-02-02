export function parseStringToObject(inputString) {
    const result = {};
    // Split the string by commas (`,`) to separate each field
    const fields = inputString.split(', ');
    
    fields.forEach(field => {
        // Split each field by the first colon (`:`) to get key and value
        const [key, ...valueParts] = field.split(':');
        const value = valueParts.join(':').trim(); // Join back in case value had colons
        result[key.trim()] = value || null; // Assign null if value is empty
    });

    return result;
}