
# **The Twelve-Factor App**

*As we know that software is about to changes time to time so we have to adapt certain methodology for building software so that any changes in future doesn't involved major changes in source code*

**There is one methodology Called *"The Twelve-Factor App"* to achieve**:-
* Minimum time and cost for new developers by using declarative formats and setup automation.
* Have a clean contract with the underlying operating system, offering maximum portability between execution environments;
* Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;
* Minimize divergence between development and production, enabling continuous deployment for maximum agility;
* And can scale up without significant changes to tooling, architecture, or development practices. 
---
## The Twelve Fators are:-
1. [**CodeBase**](https://12factor.net/codebase)
    * *There should be one codebase for one app and it should be tracked in version control system like GIT.* 
2. [**Dependencies**](https://12factor.net/dependencies)
   * *Explicitly declare and isolate dependencies for example **package.json** in javascript and **pom.xml** in java in used to declare dependencies and **npm** and **maven** is responsible for managing dependencies in javascript and java respectively*.
3. [**Config**](https://12factor.net/config)
   * All the config like database setting, username,password are set as environment variable so that it will be easy to change while deploying across various platform like **test,dev or prod**.
4. [**Backing Services**](https://12factor.net/backing-services)
   * These are the services which is external to our application like **databases,email services,or various external API's**.This type of resources can attached and deattached at our will without any major code changes.
   * For example if we are migrating from sql to nosql there not be any major changes in our bussiness logic.\
  And this can be achieved my modularizing our code.

5. [**Build,Release,Run**](https://12factor.net/build-release-run)
   * **Build Stage** -Transform code into executable bundles. It fetches vendor's dependencies and compiles binaries and assets.
   * **Release Stage**-It combine build produced by build stage and deploy's current config.
   *  **Run stage**- Runs the application in executable environment.
6. [**Processes**](https://12factor.net/processes):- Execute the apps as one or more stateless processes.
7. [**Port Binding**](https://12factor.net/port-binding)-Export services via port binding.
8. [**Concurrency**](https://12factor.net/concurrency)-
9. [**Disposability**](https://12factor.net/disposability)- Maximize robustness with fast startup and graceful shutdown.
10. [**Dev/Prod parity**](https://12factor.net/dev-prod-parity)-Keep developement,staging,production as similar as possible.
    * Time gap Should be in hours.
    * There should not be personnel gap.
    * Tools gap - For dev,prod,staging databases etc should be same as possible.
11. [**Logs**](https://12factor.net/logs)- Always maintain logs carefully because it provide visibility into the behaviour of a running app.
12. [**Admin Process**](https://12factor.net/codadmin-processese)-Run admin/Management tasks as one-off processes.


   
