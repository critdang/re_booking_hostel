module.exports = {
  CODE: {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202, // PUT AND POST
    NO_CONTENT: 204, // DELETE AND PATCH
    // 3X
    // 4X
    BAD_REQUEST: 400,
    EXPIRED_TOKEN: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    INTERNAL_SERVER_ERROR: 500,
  },
  ERROR: {
    DEFAULT: 100,
    INTERNALSERVERERROR: 101,
    NODATA: 102,
    ACCOUNTDOESNOTEXIST: 103,
    PASSWORDISNOTCORRECT: 104,
    // USER 111 - 130
    CANNOTGETUSER: 111,
    CANNOTCREATEUSER: 112,
    CANNOTDELETEUSER: 113,
    CANNOTUPDATEUSER: 114,
    EMAILISEXIST: 115,
    USERISREQUIRED: 116,
    EMAILISREQUIRED: 117,
    PASSWORDISREQUIRED: 118,
    CANTNOTVERIFYEMAIL: 119,
    CANTNOTSENDVERIFYEMAIL: 120,
    CANTNOTRESETPASSWORD: 121,
    CANTNOTUPDATEPASSWORD: 122,
    FIRSTNAMEISREQUIRED: 122,
    LASTNAMEISREQUIRED: 122,
    // PRODUCT 131
    PRODUCTISREQUIRED: 131,
    CANNOTGETPRODUCT: 132,
    CANNOTCREATEPRODUCT: 133,
    CANNOTDELETEPRODUCT: 134,
    CANNOTUPDATEPRODUCT: 135,
    // CATEGORIES 141
    NAMECATEGORIEISREQUIRED: 141,
    SLUGCATEGORIEISREQUIRED: 142,
    CANNOTGETCATEGORY: 143,
    CANNOTCREATECATEGORY: 144,
    CANNOTDELETECATEGORY: 145,
    CANNOTUPDATECATEGORY: 146,
    // PRODUCTS 151
    NAMEPRODUCTISREQUIRED: 151,
    PRICEPRODUCTISREQUIRED: 152,
    SALEPRODUCTISREQUIRED: 153,
    // CANNOTGETPRODUCT: 154,
    // CANNOTCREATEPRODUCT: 155,
    // CANNOTDELETEPRODUCT: 156,
    // CANNOTUPDATEPRODUCT: 157,
    CATEGORIEISREQUIRED: 158,
    // WISHLISTS 171
    CANNOTGETWISHLIST: 171,
    CANNOTCREATEWISHLIST: 172,
    CANNOTDELETEWISHLIST: 173,
    CANNOTUPDATEWISHLIST: 174,
    // WISHLISTS 181
    CANNOTGETINVOICE: 181,
    CANNOTCREATEINVOICE: 182,
    CANNOTDELETEINVOICE: 183,
    CANNOTUPDATEINVOICE: 184,
  },
};
