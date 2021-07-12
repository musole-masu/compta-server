/**
 * 
 * ACCOUNT HANDLER, HANDLES CLASS CREATION, ACCOUNT CREATION
 * 
 */
const { randomBytes } = require('crypto');
const sequelize = require('../../utils/connection');


/**
 * 
 * Import tables models to make queries
 * 
 */
const Class = require('../models/accounting/class');

const ACCOUNTING_CLASSES = [
    {classNumber: 1, accountTitle: `COMPTES DE RESSOURCES DURABLES`, classTitle: `CAPITAL`},
    {classNumber: 2, accountTitle: `COMPTES D'ACTIF IMMOBILISE`, classTitle: `IMMOBILISATIONS`},
    {classNumber: 3, accountTitle: `COMPTES DE STOCKS`, classTitle: `STOCKS`},
    {classNumber: 4, accountTitle: `COMPTES DE TIERS`, classTitle: `TIERS`},
    {classNumber: 5, accountTitle: `COMPTES DE TRESORERIE`, classTitle: `TRESORERIE`},
    {classNumber: 6, accountTitle: `COMPTES DE CHARGES DES ACTIVITES ORDINAIRES`, classTitle: `CHARGES`},
    {classNumber: 7, accountTitle: `COMPTES DE PRODUITS DES ACTIVITES ORDINAIRES`, classTitle: `PRODUITS`},
    {classNumber: 8, accountTitle: `COMPTES DES AUTRES CHARGES ET DES AUTRES PRODUITS`, classTitle: `VALEURS COMPTABLES DES CESSIONS D'IMMOBILISATIONS`},
    {classNumber: 9, accountTitle: `COMPTES DES ENGAGEMENTS HORS BILAN ET COMPTES DE LA COMPTABILITE ANALYTIQUE DE GESTION`, classTitle: `ENGAGEMENTS OBTENUS ET ENGAGEMENTS ACCORDES`}
];
const CLASS_SEVEN_VENTES = [
    {accountNumber: 701, accountTitle: `VENTES DE MARCHANDISES`},
    {accountNumber: 706, accountTitle: `SERVICES VENDUS`},
    {accountNumber: 707, accountTitle: `PRODUITS ACCESSOIRES`},
    {accountNumber: 758, accountTitle: `AUTRES PRODUITS DIVERS`}
];
const CLASS_SIX_ACHATS = [
    {accountNumber: 601, accountTitle: `ACHATS DE MARCHANDISES`},
    {accountNumber: 602, accountTitle: `ACHATS DE MATIERES PREMIERES ET FOURNITURES LIEES`},
    {accountNumber: 604, accountTitle: `ACHATS STOCKES DE MATIERES ET FOURNITURES CONSOMMABLES`},
    {accountNumber: 605, accountTitle: `AUTRES ACHATS`},
    {accountNumber: 608, accountTitle: `ACHATS D'EMBALLAGES`},
    {accountNumber: 614, accountTitle: `TRANSPORTS DU PERSONNEL`},
    {accountNumber: 622, accountTitle: `LOCATIONS, CHARGES LOCATIVES`},
    {accountNumber: 624, accountTitle: `ENTRETIEN, REPARATIONS, REMISE EN ETAT ET MAINTENANCE`},
    {accountNumber: 627, accountTitle: `PUBLICITE, PUBLICATIONS ET RELATIONS PUBLIQUES`},
    {accountNumber: 628, accountTitle: `FRAIS DE TELECOMMUNICATIONS`},
    {accountNumber: 631, accountTitle: `FRAIS BANCAIRES`},
    {accountNumber: 632, accountTitle: `REMUNERATIONS D'INTERMEDIAIRES ET DE CONSEILS`},
    {accountNumber: 658, accountTitle: `CHARGES DIVERSES`},
    {accountNumber: 661, accountTitle: `REMUNERATIONS DIRECTES VERSEES AU PERSONNEL NATIONAL`},
    {accountNumber: 664, accountTitle: `CHARGES SOCIALES`}
]

exports.postAccountingClassHandler = (req, res, next) => {
    const className = req.body.className;
    const classOtherName = req.body.classOtherName;

    Class.create({className: className, classOtherName: classOtherName}).then(result => {
        res.status(201).send(result)
    })
    .catch(err => console.log(err))
};

exports.getAccountingClassHandler = (req, res, next) => {
    Class.findAll()
    .then(result => res.status(200).send(result))
    .catch(err => console.log(err));
};

// exports.postAccountHandler = (req, res, next) => {
//     const accountTitle = req.body.accountTitle;
//     const accountClass = req.body.accountClass;
//     const subAccountNumber = req.body.subAccountNumber;
//     const accountNumber = `${subAccountNumber}-${accountTitle}`;

//     res.send({})

// }
