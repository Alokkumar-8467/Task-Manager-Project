# Next.js

# 1.


# 2. Dynamic route

In this branch we work on 
> todo/[userId]/posts/[postId]

In dynamic route we can pass routes so we have to make a particulat route.js page. Suppose if we want to pass user-id for 100 users, for that we have to made 100 routes and it's make our app full of routes.
So, for these kinds of problem we use DYNAMIC ROUTES.
In Dynamic route we pass route inside square bracket [].
`localhost:3000/api/users/[userid]`. "[userid]" changes many times.

We can pass more than one dynamic routes at a time.
`localhost:3000/api/users/[usersid]/post/[postid]`.


# 6. Creating user API
In this user API we are creating these API.

POST -- user information json -- Create
GET  -- return users json -- get users
GET -- API/[userId] -- get single user
PUT -- [userid] json information -- update user
DELETE -- [userId] -- delete user

# 7. Creating work API


# 8. Creating task API

> In this we create task api and linked with user-api by using userId.

How to add user and task api.
We have two options
1. First Approach for modeling.

In this we make only one user-api.
And inside it we pass user name,about,phone, email.
And at end we pass the task object inside user api.
And we get all details at a time.
But it create a problem, when we fetch user api,
it fetch task details also, but according to ouprogram requirment,
we some time want user details and sometime user-tasdetails. 
So, we move to the 2nd approach


2. Second Approach
In this approach we create user and user-task api,
and linked with each other.
For linking particular user with particular user-task,
we use user-id.
By user-id we find or identify which user it is.
> Note: If we have a user, So by user we can't identif that user-task, But if we have a task and that task contain user-id then we identify that user.

we can also reverse the process and pass task-id in user,
So, we can tarvel from user to task and task to user


