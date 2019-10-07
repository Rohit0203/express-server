export const  permissions={
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
    }

export const users=[
        {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail: 'trainee2@successive.tech',
        reviewerEmail: 'reviewer1@successive.com'
    },
    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer5@successive.tech'
    }
    ];
  