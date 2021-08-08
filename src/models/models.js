/***
 * 
 * HERE WE REQUIRE ALL OUR MODELS FOR SYNC EXECUTION
 * 
 */
module.exports = {
    User: require('../models/users/user'),
    Roles: require('../models/users/roles'),
    UserRoles: require('../models/users/userRole'),
    Class: require('../models/accounting/class'),
    ThreeDigitAccount: require('../models/accounting/account').ThreeDigitAccount,
    FourDigitAccount: require('../models/accounting/account').FourDigitAccount,
    TextAndDigitAccount: require('../models/accounting/account').TextAndDigitAccount,
};