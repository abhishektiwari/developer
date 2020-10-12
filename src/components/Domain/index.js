import React from "react";
function Domain({path}) {
    var domain;
    var url;
    if (typeof window !== 'undefined') {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        domain = params.get('domain');
        if (!domain) {
            if (localStorage.getItem('axioms-dev-hub-domain')) {
                domain = localStorage.getItem('axioms-dev-hub-domain');
            }
        }
    }
    if (!domain) {
        console.log()
        url = 'https://{domain}'+path;
    }
    else {
        var url = 'https://' + domain + path;
        localStorage.setItem('axioms-dev-hub-domain', domain);
    }
    return (
        <a href={url} target="_blank">
        {url}
        </a>
    );
}

export default Domain;