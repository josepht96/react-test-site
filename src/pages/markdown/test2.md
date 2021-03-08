# REEEEE Notes on mobility, fortify, and whitesource builds

## Tools

**Whitesource**

Whitesource is a tool for alerting developers to vulnerabilities in open source libraries  
Determines open source components in applications and enforces company policies  
Our understanding:  
Whitesource tool scans directories and uploads information to Whitesource api.
Then Whitesource api is called to generate reports.

.c .cc .cp .cpp .cxx .c++ .h .hpp .hxx .js .java .class .war .jar .m .mm .js
.php .jar .gem .rb .dll .cs .nupkg .js .java .class .war .jar .tgz .deb .gzip
.rpm .tar .bz2 .zip .tar.gz .egg .whl .py

**fortify**

## Builds

**fortify**

1. Import necessary build binaries/dependencies
2. sourceanalyzer.exe before compilation
3. Run fortify on projects  
   Theres a translation step, then generate the fpr report
4. Publish .fpr to Fortiy website
5. Suppose the report can be viewed/used through said portal

**mobility**

1. Standard build process for the most part
2. Android is outputted to /binaries/, iOS .ipa package explicitly copied to /binaries/
3. Use appcenter cli to publish build output, uses build variables

**whitesource**

1. Copy build source directory to work area
2. Run wss-unified-agent-20.2.2.jar against directory
3. Use API call to generate xlsx files - Library_Lists.xlsx, Vulnerability_Report.xlsx, Alerts_Report.xlsx
4. Use API call to generate VulnerabilityReport
5. Convert to xml
6. Generate HTML page from xml file
7. Copy to `SDO-EHR-DEVOPS\\Sunrise\\Components\\$(ProjName)`
8. Delete directory

**POH/Mobility**  
Default MS provided VM  
both are built on iOS VM/Agent  
Need to install certificate to be installed on the machine  
This doesnt happen in the SMX build because its already installed on build machine

Apple provisioning profile, used for binding machine to the app  
Create apple developer account  
Think assembly info, needs to happen before compilation

Iphone creates app file because QA doesnt have tablets. .APP file allows for testing in  
iPhone simualtor

appcenter dsitribute, all just account details from AppCenter  
Destination group = groups in appcenter.ms  
Auth token from User API tokens in appcenter.ms as well  
release notes, commit comment
