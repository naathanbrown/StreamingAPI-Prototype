export interface ICompany {
	//Registered Office Address/ Basic Details
	_id: string | number;
	companyName: string;
	companyNumber: string;
	poBox?: string;
	addressLine1?: string;
	addressLine2?: string;
	postTown?: string;
	country?: string;
	postCode?: string;
	companyCategory?: string;
	companyStatus?: CompanyStatus;
	countryOfOrigin?: string;
	dissolutionDate?: Date;
	incorporationDate?: Date;
	//Accounts
	accountingRefDay?: Date;
	accountingRefMonth?: Date;
	nextDueDate?: Date;
	lastMadeUpDate?: Date;
	accountsCategory?: string;
	//Returns
	returnsNext?: Date;
	returnsLast?: Date;
	//Mortgages
	mortgagesCharges?: number;
	mortgagesOutstanding?: number;
	mortgagesPartSatisfied?: number;
	mortgagesSatisfied?: number;
	//SIC Codes
	sicCode1?: number;
	sicCode2?: number;
	sicCode3?: number;
	sicCode4?: number;
	//Limited partnerships
	numGenPartners?: number;
	numLimPartners?: number;
	uri?: string;
	//Previous Names
	changeOfNameDate?: Date;
	previousName?: string;
	//Confirmation Statement
	confStmtNextDueDate?: Date;
	confStmtLastMadeUpDate?: Date;
}

export interface ITimepoint {
	_id: string | number;
	timepoint: string;
	type: string;
}

export type CompanyStatus =
	| "ACTIVE"
	| "DISSOLVED"
	| "LIQUIDATION"
	| "RECEIVER ACTION"
	| "CONVERTED / CLOSED"
	| "VOLUNTARY ARRANGEMENT"
	| "INSOLVENCY PROCEEDINGS"
	| "IN ADMINISTRATION"
	| "OPEN"
	| "CLOSED";
export type CompanyType =
	| "PRIVATE UNLIMITED COMPANY"
	| "PRIVATE LIMITED COMPANY"
	| "PUBLIC LIMITED COMPANY"
	| "OLD PUBLIC COMPANY"
	| "PRIVATE LIMITED COMPANY BY GUARANTEE WITHOUT SHARE CAPITAL, USE OF 'LIMITED' EXEMPTION"
	| "LIMITED PARTNERSHIP"
	| "PRIVATE LIMITED BY GUARANTEE WITHOUT SHARE CAPITAL"
	| "CONVERTED / CLOSED"
	| "PRIVATE UNLIMITED COMPANY WITHOUT SHARE CAPITAL"
	| "PRIVATE LIMITED COMPANY, USE OF 'LIMITED' EXEMPTION"
	| "PROTECTED CELL COMPANY"
	| "ASSURANCE COMPANY"
	| "OVERSEAS COMPANY"
	| "EUROPEAN ECONOMIC INTEREST GROUPING (EEIG)"
	| "INVESTMENT COMPANY WITH VARIABLE CAPITAL"
	| "INVESTMENT COMPANY WITH VARIABLE CAPITAL"
	| "INVESTMENT COMPANY WITH VARIABLE CAPITAL"
	| "REGISTERED SOCIETY"
	| "INDUSTRIAL AND PROVIDENT SOCIETY"
	| "NORTHERN IRELAND COMPANY"
	| "CREDIT UNION (NORTHERN IRELAND)"
	| "LIMITED LIABILITY PARTNERSHIP"
	| "ROYAL CHARTER COMPANY"
	| "INVESTMENT COMPANY WITH VARIABLE CAPITAL"
	| "UNREGISTERED COMPANY"
	| "OTHER COMPANY TYPE"
	| "EUROPEAN PUBLIC LIMITED LIABILITY COMPANY (SE)"
	| "UK ESTABLISHMENT COMPANY"
	| "SCOTTISH QUALIFYING PARTNERSHIP"
	| "CHARITABLE INCORPORATED ORGANISATION"
	| "SCOTTISH CHARITABLE INCORPORATED ORGANISATION"
	| "FURTHER EDUCATION OR SIXTH FORM COLLEGE CORPORATION"
	| "PRI/LTD BY GUAR/NSC (PRIVATE, LIMITED BY GUARANTEE, NO SHARE CAPITAL)"
	| "COMMUNITY INTEREST COMPANY";
export type AccountType =
	| undefined
	| "FULL"
	| "SMALL"
	| "MEDIUM"
	| "GROUP"
	| "DORMANT"
	| "INTERIM"
	| "INITIAL"
	| "TOTAL EXEMPTION FULL"
	| "TOTAL EXEMPTION SMALL"
	| "PARTIAL EXEMPTION"
	| "AUDIT EXEMPTION SUBSIDIARY"
	| "FILING EXEMPTION SUBSIDIARY"
	| "MICRO ENTITY"
	| "NO ACCOUNTS TYPE AVAILABLE"
	| "AUDITED ABRIDGED"
	| "UNAUDITED ABRIDGED";
