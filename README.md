# favicon-server
Simple server that retruns favicon.

Bitwarden/Vaultwarden has no support for custom icon. So I created this little application that can be set as url of an entry.
Bitwarden/Vaultwarden will fetch the icon from this application.

Vaultwarden seems to only check the root path of a url to fetch favicon. Thereby this application uses wildcard dns and subdomains.
