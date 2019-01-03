export interface IUsersSidePanel {
    userTypes: userssidepanelitems[];
    locations: userssidepanelitems[];
    groups: userssidepanelitems[];
    dealerOutlets: userssidepanelitems[];
    dealerCompanies: userssidepanelitems[];
}

class userssidepanelitems {
    code: string;
    name: string;
}