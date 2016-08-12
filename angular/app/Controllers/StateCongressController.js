angular
    .module('politics')
    .controller('StateCongressCtrl', function($scope, CandidateServices) {
       
        $(document).ready(function() {
            $('#map').usmap({
                clickState: {
                    'AL': function(event, data) {
                        location.assign("http://www.legislature.state.al.us/aliswww/default.aspx");
                    },
                    'Ak': function(event, data) {
                        location.assign("http://akleg.gov/index.php");
                    },
                    'AZ': function(event, data) {
                        location.assign("http://www.azleg.gov");
                    },
                    'AR': function(event, data) {
                        location.assign("http://www.arkansas.gov/government/agency-category/category/legislative");
                    },
                    'CA': function(event, data) {
                        location.assign("http://www.legislature.ca.gov");
                    },
                    'CO': function(event, data) {
                        location.assign("https://www.colorado.gov/state-legislature");
                    },
                    'CT': function(event, data) {
                        location.assign("https://www.cga.ct.gov");
                    },
                    'DE': function(event, data) {
                        location.assign("http://legis.delaware.gov");
                    },
                    'DC': function(event, data) {
                        location.assign("http://dccouncil.us");
                    },
                    'FL': function(event, data) {
                        location.assign("http://www.leg.state.fl.us/Welcome/index.cfm?CFID=80648820&CFTOKEN=f5e96447c437d011-9318AFFD-DEAB-E0F2-E6C1A51CC2A1A304");
                    },
                    'GA': function(event, data) {
                        location.assign("http://www.legis.ga.gov/en-US/default.aspx");
                    },
                    'HI': function(event, data) {
                        location.assign("http://www.capitol.hawaii.gov/");
                    },
                    'ID': function(event, data) {
                        location.assign("https://www.legislature.idaho.gov/");
                    },
                    'IL': function(event, data) {
                        location.assign("http://www.ilga.gov/");
                    },
                    'IN': function(event, data) {
                        location.assign("https://iga.in.gov/");
                    },
                    'IA': function(event, data) {
                        location.assign("https://www.legis.iowa.gov/");
                    },
                    'KS': function(event, data) {
                        location.assign("http://www.kslegislature.org/li/");
                    },
                    'KY': function(event, data) {
                        location.assign("http://www.lrc.ky.gov/");
                    },
                    'LA': function(event, data) {
                        location.assign("http://www.legis.la.gov/legis/Home.aspx");
                    },
                    'ME': function(event, data) {
                        location.assign("http://legislature.maine.gov/");
                    },
                    'MD': function(event, data) {
                        location.assign("http://mgaleg.maryland.gov/webmga/frm1st.aspx?tab=home");
                    },
                    'MA': function(event, data) {
                        location.assign("https://malegislature.gov/");
                    },
                    'MI': function(event, data) {
                        location.assign("http://www.legislature.mi.gov/(S(pvrcinn4eyypjak3jllnnfzj))/mileg.aspx?page=legislators");
                    },
                    'MN': function(event, data) {
                        location.assign("https://www.leg.state.mn.us/");
                    },
                    'MS': function(event, data) {
                        location.assign("http://www.legislature.ms.gov/Pages/default.aspx");
                    },
                    'MO': function(event, data) {
                        location.assign("http://moga.mo.gov/");
                    },
                    'MT': function(event, data) {
                        location.assign("http://leg.mt.gov/css/default.asp");
                    },
                    'NE': function(event, data) {
                        location.assign("http://nebraskalegislature.gov/");
                    },
                    'NV': function(event, data) {
                        location.assign("https://www.leg.state.nv.us/");
                    },
                    'NH': function(event, data) {
                        location.assign("http://www.gencourt.state.nh.us/");
                    },
                    'NJ': function(event, data) {
                        location.assign("http://www.njleg.state.nj.us/");
                    },
                    'NM': function(event, data) {
                        location.assign("https://www.nmlegis.gov/");
                    },
                    'NY': function(event, data) {
                        location.assign("http://www.ny.gov/agencies");
                    },
                    'NC': function(event, data) {
                        location.assign("http://www.ncleg.net/");
                    },
                    'ND': function(event, data) {
                        location.assign("http://www.legis.nd.gov/");
                    },
                    'OH': function(event, data) {
                        location.assign("https://www.legislature.ohio.gov/");
                    },
                    'OK': function(event, data) {
                        location.assign("http://www.oklegislature.gov/");
                    },
                    'OR': function(event, data) {
                        location.assign("https://www.oregonlegislature.gov/");
                    },
                    'PA': function(event, data) {
                        location.assign("http://www.legis.state.pa.us/");
                    },
                    'RI': function(event, data) {
                        location.assign("http://www.rilin.state.ri.us/Pages/Default.aspx");
                    },
                    'SC': function(event, data) {
                        location.assign("http://www.scstatehouse.gov/");
                    },
                    'SD': function(event, data) {
                        location.assign("http://sdlegislature.gov/");
                    },
                    'TN': function(event, data) {
                        location.assign("http://www.legislature.state.tn.us/");
                    },
                    'TX': function(event, data) {
                        location.assign("http://www.capitol.state.tx.us/");
                    },
                    'UT': function(event, data) {
                        location.assign("https://le.utah.gov/");
                    },
                    'VT': function(event, data) {
                        location.assign("http://legislature.vermont.gov/");
                    },
                    'VA': function(event, data) {
                        location.assign("http://virginiageneralassembly.gov/");
                    },
                    'WA': function(event, data) {
                        location.assign("http://leg.wa.gov/");
                    },
                    'WV': function(event, data) {
                        location.assign("http://www.legis.state.wv.us/");
                    },
                    'WI': function(event, data) {
                        location.assign("https://legis.wisconsin.gov/");
                    },
                    'WY': function(event, data) {
                        location.assign("http://legisweb.state.wy.us/LSOWEB/Default.aspx");
                    }

                }
            });
        });
    })

