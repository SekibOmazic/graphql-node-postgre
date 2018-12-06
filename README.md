# graphql-node-postgre

Just playing with GraphQL on back end. If you like Java more, have a look at [spring-graphql-example](https://github.com/SekibOmazic/spring-graphql-example)

## How to start

- start the Docker container with PostgreSQL

```bash
cd docker
./run-docker.sh
```

- start the application

```bash
cd ..
npm start
```

After launching the application the test data contained in `src/main/resources/data.sql` will be stored in the database.
Now you are ready to play with the [GraphQL](http://localhost:8000/graphiql) endpoint.

To cleanup your database just do following:

```bash
cd docker
./clear-all.sh
```

## Sample Queries

Here are some queries you can try:

```
query me {
  me {
    id
    firstName
  }
}

query findFifthEmployee {
  employee(id: 5) {
    id
    firstName
    lastName
    title
    role
    department {
      name
    }
  }
}

query allEmployees {
  employees(pagination: {size:10, page:1}) {
    id
    firstName
    lastName
    title
    role
    department {
      name
    }
  }
}

query allDepartmentsForCompany {
  departments(organizationId: 1) {
    id
    name
  }
}

query allDepartmentsWithEmployees {
  departments(organizationId: 1) {
    id
    name
    employees {
      id
      firstName
    }
  }
}

query GetDept3 {
  department(id:3) {
    id
    name
    employees {
      id
      firstName
    }
    organization {
      id
      name
    }
  }
}

query AllOrgs {
  organizations {
    id
    name
    departments {
      id
      name
    }
  }
}

query GetOrg1 {
  organization(id: 1) {
    id
    name
    departments {
      id
      name
    }
  }
}

mutation CreateDummyDepartment {
  createDepartment(organizationId: 1, name: "Dummy") {
    id
    name
  }
}

mutation UpdateDummyDepartment {
  updateDepartment(id: 4, name: "Not so dumb") {
    id
    name
  }
}

mutation DeleteDummyDepartment {
  deleteDepartment(id: 4)
}
```
