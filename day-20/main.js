function domainType(domains) {
  const mapping = {
    "org": "organization",
    "com": "commercial",
    "net": "network",
    "info": "information"
  }
  return domains.map(d => mapping[d.split('.').pop()])
}

const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
domainType(domains)
console.log('domainType(domains): ', domainType(domains));