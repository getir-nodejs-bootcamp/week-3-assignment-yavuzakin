const validateRequestBody = (schema, source) => (req, res, next) => {
    const { value, error } = schema.validate(req[source], {convert: false});
    if(error) {
        const errorMessage = error?.details?.map(detail => detail?.message)
                                            .join(', ');
        return res.status(400).json({
            status: 'error',
            message: errorMessage
        });
    }
    return next();
}

module.exports = validateRequestBody;