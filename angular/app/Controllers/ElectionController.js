angular
    .module('politics')
    .controller('ElectionCtrl', function($scope, UserServices) {

        $(document).ready(function() {
            $('#map').usmap({
                clickState: {
                    'AL': function(event, data) {
                        location.assign("http://www.alabamavotes.gov/");
                    },
                    'Ak': function(event, data) {
                        location.assign("http://www.elections.alaska.gov/ei_ed_2013_dates.php");
                    },
                    'AZ': function(event, data) {
                        location.assign("http://www.azsos.gov/elections");
                    },
                    'AR': function(event, data) {
                        location.assign("http://www.sos.arkansas.gov/elections/Pages/default.aspx");
                    },
                    'CA': function(event, data) {
                        location.assign("http://www.sos.ca.gov/elections");
                    },
                    'CO': function(event, data) {
                        location.assign("http://www.sos.state.co.us/pubs/elections/main.html?menuheaders=5");
                    },
                    'CT': function(event, data) {
                        location.assign("http://www.ct.gov/sots/cwp/view.asp?a=3179&q=528074");
                    },
                    'DE': function(event, data) {
                        location.assign("http://elections.delaware.gov/index.shtml");
                    },
                    'DC': function(event, data) {
                        location.assign("https://www.dcboee.org/default.asp");
                    },
                    'FL': function(event, data) {
                        location.assign("http://dos.myflorida.com/elections/");
                    },
                    'GA': function(event, data) {
                        location.assign("http://sos.ga.gov/index.php/elections");
                    },
                    'HI': function(event, data) {
                        location.assign("http://elections.hawaii.gov/");
                    },
                    'ID': function(event, data) {
                        location.assign("http://www.sos.idaho.gov/elect/index.html");
                    },
                    'IL': function(event, data) {
                        location.assign("http://www.elections.il.gov/");
                    },
                    'IN': function(event, data) {
                        location.assign("http://www.in.gov/sos/elections/");
                    },
                    'IA': function(event, data) {
                        location.assign("https://sos.iowa.gov/");
                    },
                    'KS': function(event, data) {
                        location.assign("http://www.kssos.org/elections/elections.html");
                    },
                    'KY': function(event, data) {
                        location.assign("http://www.sos.ky.gov/elections/Pages/default.aspx");
                    },
                    'LA': function(event, data) {
                        location.assign("http://www.sos.la.gov/ElectionsAndVoting/GetElectionInformation/Pages/default.aspx");
                    },
                    'ME': function(event, data) {
                        location.assign("http://www.maine.gov/sos/cec/elec/");
                    },
                    'MD': function(event, data) {
                        location.assign("http://www.elections.state.md.us/");
                    },
                    'MA': function(event, data) {
                        location.assign("https://www.sec.state.ma.us/ele/eleidx.htm");
                    },
                    'MI': function(event, data) {
                        location.assign("http://www.michigan.gov/sos/0,1607,7-127-1633---,00.html");
                    },
                    'MN': function(event, data) {
                        location.assign("http://www.sos.state.mn.us/home/?aspxerrorpath=%2findex.aspx");
                    },
                    'MS': function(event, data) {
                        location.assign("http://www.sos.ms.gov/Pages/default.aspx");
                    },
                    'MO': function(event, data) {
                        location.assign("https://www.sos.mo.gov/elections/");
                    },
                    'MT': function(event, data) {
                        location.assign("http://sos.mt.gov/elections/index.asp");
                    },
                    'NE': function(event, data) {
                        location.assign("http://www.sos.ne.gov/elec/genvoterinfo.html");
                    },
                    'NV': function(event, data) {
                        location.assign("http://nvsos.gov/index.aspx?page=3");
                    },
                    'NH': function(event, data) {
                        location.assign("http://sos.nh.gov/Elections.aspx");
                    },
                    'NJ': function(event, data) {
                        location.assign("http://www.njelections.org/");
                    },
                    'NM': function(event, data) {
                        location.assign("http://www.sos.state.nm.us/");
                    },
                    'NY': function(event, data) {
                        location.assign("http://www.elections.ny.gov/");
                    },
                    'NC': function(event, data) {
                        location.assign("http://www.ncsbe.gov/");
                    },
                    'ND': function(event, data) {
                        location.assign("https://vip.sos.nd.gov/PortalList.aspx");
                    },
                    'OH': function(event, data) {
                        location.assign("http://www.sos.state.oh.us/elections.aspx");
                    },
                    'OK': function(event, data) {
                        location.assign("https://www.ok.gov/elections/");
                    },
                    'OR': function(event, data) {
                        location.assign("http://sos.oregon.gov/voting-elections/Pages/default.aspx");
                    },
                    'PA': function(event, data) {
                        location.assign("http://www.dos.pa.gov/Pages/default.aspx#.V2GRgPkrLIU");
                    },
                    'RI': function(event, data) {
                        location.assign("http://sos.ri.gov/divisions/elections");
                    },
                    'SC': function(event, data) {
                        location.assign("http://www.scvotes.org/");
                    },
                    'SD': function(event, data) {
                        location.assign("http://sdsos.gov/elections-voting/default.aspx");
                    },
                    'TN': function(event, data) {
                        location.assign("http://sos.tn.gov/elections");
                    },
                    'TX': function(event, data) {
                        location.assign("http://www.sos.state.tx.us/elections/");
                    },
                    'UT': function(event, data) {
                        location.assign("https://elections.utah.gov/");
                    },
                    'VT': function(event, data) {
                        location.assign("https://www.sec.state.vt.us/elections.aspx");
                    },
                    'VA': function(event, data) {
                        location.assign("http://elections.virginia.gov/");
                    },
                    'WA': function(event, data) {
                        location.assign("http://www.sos.wa.gov/elections/");
                    },
                    'WV': function(event, data) {
                        location.assign("http://www.sos.wv.gov/elections/pages/default.aspx");
                    },
                    'WI': function(event, data) {
                        location.assign("http://www.gab.wi.gov/");
                    },
                    'WY': function(event, data) {
                        location.assign("http://soswy.state.wy.us/Elections/Default.aspx");
                    }

                }
            });
        });
    })
