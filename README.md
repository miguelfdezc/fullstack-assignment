<img src="https://user-images.githubusercontent.com/28607713/139576077-5c322bfa-d71b-414b-9b63-ff4c53ec9a8d.png"
     alt="planet-logo-white-no-bg"
     width="120">

# Planet fullstack-assignment
Full-Stack position skill assessment home assignment.

## Context
As a Full-Stack developer in Planet Dataset, you will be asked to participate in the design
and implementation of new features that will be used in our price-management platform for
eCommerce.

New features are geared towards automations and, in our pletform, developing them usually
involves three different tasks:
1. Implementing an interface to configure the user's preferences.
2. Implementing API endpoints to retrieve data such as result examples.
3. Implementing asyncronous tasks that apply the changes to our clients' stores.

This is the workflow that we tried to replicate in this task. The theme is forex analysis,
and we will require you to implement an API call to retrieve currencies from the database,
an asynchronous task to retrieve the data from an external API, and the interface to subscribe
and list different currencies.

## Overview
This repository holds the basic project structure for implementing a NodeJS based API and service
used in a fictitious software solution that provides stock exchange data services. The front-end
is an Angular app with an NgRX store in case you prefer it for state management.

Disclaimer: The purpose and usage of this repo is solely for insight adquisition regarding problem-solving,
and does not represent an existing and ongoing implementation task.

PD: We provide this structure as an starting point but you may discard it and approach the task in
any other way.

## The problem
The solution you are required to design and implement is geared towards collecting historic exchange
prices from the currencies the API user wants to EUR. With this in mind we need a system that provides
an API for adding, removing and listing the currencies that are being followed at the moment, and an
additional endpoint for retrieving such historic data.

The workflow that the system should support is:
1. The API user adds or removes currencies from the followed ones, by the currency code.
2. The API user is able to see the followed currencies using the corresponding endpoint
3. The system, periodically, fetches the stock exchange price from each followed currency to Euros (EUR).
4. The API user can retrieve the historical data for a subset of the followed currencies, which
     includes basic data such as ask, bid, and spread; and additional calculated stats.

> We recommend using the [alphavantage API](https://www.alphavantage.co/) for retrieving the data as
> it is free and the endpoint for retrieving the data is well documented and easy to use.
> _See the docs: [https://www.alphavantage.co/documentation/#crypto-exchange](https://www.alphavantage.co/documentation/#crypto-exchange)_

## Tasks
The required functionality can be summarized in the following four tasks:
- Implement an endpoint for retrieving the exchange price history of the followed currencies. This endpoint
     must allow specifying the currencies to be included and the fields to include; at least the following
     fields must be included: bid, ask, spread, bid-diff (the difference between the bid and the previous
     hour mean bid), ask-diff (the difference between the ask and the previous hour mean ask), and spread-diff
     (the difference between the spread and the previous hour mean spread).
- Implement the periodic historic data retrieval.
- Implement the interface to list, follow and unfollow currencies.
- Implement the interface to list the exchange price history of the followed currencies.

## Evaluation
We are in search for a backend developer who is capable of implementing API requirements, can work
databases and can design "future-proof" (if that even exists) solutions.

Therefore we will evaluate the assignment having the following things in mind:
- Home assignment completition: Whether you completed all tasks and how you prioritized time.
- Code versioning: We are not too picky regarding Git, but do appreciate feature branchs and a clean
  repo history that could help us understand how you approached this assignment.
- Task-specific implementation details:
  - Currency endpoints implementation. We would appreciate it if you took into account the following
    aspects: _How would you document the API?_, _What would happen if we wanted to support newer data sources?_
  - Price history endpoint. We would appreciate it if you took into account the following
    aspects: _How would you allow the user to specify a time range?_ _What would happen if we wanted to support more statistics?_
  - Periodic data retrieval. We would appreciate it if you took into account the following
    aspects: _What would happen if we wanted to support more types of data sources?_
- Extras: Providing extra documentation, identifying any improvement opportunity (even if you didn't
  implement it), or having a fluent communication during your process (just let us know how you are
  doing) will be positively taken into account.

## Repository structure
The code is laid down in a monorepo fashion with make commands for easier admin tasks. The three services
that you can find find are the **api** and **service** services.

The **api** service is an Express server with hot code reloading, while **service** generic service with a
Node setup that runs the script periodically and that you may use -or not- for any recurring process; this
later service can be run manually without the cron job.

You can use the `make` command (from the root directory) to run the platform. We have set it up for two main
use cases:
* Having the API up (with hot-reloading), along with the generic service (with**out** hot-reloading) running periodically using cron:
     ```bash
     make backend-up
     ```
* Having the API up (with hot-reloading) without the generic service. You can then execute the generic service
     once or have it execute each time the code has changed:
     ```bash
     make backend-up-slim
     # execute the generic service once
     make service-run
     # execute the generic service each time the code changes (hot-reloading)
     make service-dev
     ```

Following is a more-in-depth list of the available command for each service:
- The _services/api_ directory holds the code for the API. The following make commands are available:
     - `backend-build` Builds the corresponding Docker images.
     - `backend-up` Raises the platform.
     - `backend-up-slim` Raises the platform without the service _service_ running in the background (just the db and API).
     - `backend-down` Shuts down the platform. _Requires having the platform up (you can use make backend-up)_
     - `backend-dump` Dumps the database contents to a _dump_ folder. _Requires having the platform up (you can use make backend-up)_
     - `backend-load` Loads the database contents from a _dump_ folder. _Requires having the platform up (you can use make backend-up)_
     - `backend-dbshell` Connects to the database shell. _Requires having the platform up (you can use make backend-up)_
     - `backend-test` Runs the API tests with database dump and restore. _Requires having the platform up (you can use make backend-up)_

- The _services/services_ directory holds the code for the API. The following make commands are available:
     - `service-build` Builds the corresponding Docker images.
     - `backend-run` Executes just once the service.. _Requires having the platform up (you can use make backend-up)_
     - `backend-dev` Executes the service each time the code changes. _Requires having the platform up (you can use make backend-up)_
     
- The _services/front-end_ directory holds the code for the Front-end. The following make commands are available:
     - `frontend-build` Builds the corresponding app dist files.
     - `frontend-dev` Runs the front-end service locally (accessible at http://localhost:4200). _It will install the dependencies (requires having a local installation of node)._
---

# fullstack-assignment
Full-Stack position skill assessment home assignment.

**[Place here any extra documentation or comments you want us to have.]**
