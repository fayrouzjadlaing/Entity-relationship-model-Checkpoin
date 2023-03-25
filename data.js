+-------------+              +---------------+
|  Gymnasium  |              |    Session    |
+-------------+              +---------------+
| id          |              | id            |
| name        |--------------| type_of_sport |
| address     |              | schedule      |
| phone_number|              | max_capacity  |
+-------------+              | gymnasium_id  |
                             +---------------+
                                    |
                                    |
                                    |
                      +-----------------------------+
                      |            Member           |
                      +-----------------------------+
                      | id                          |
                      | unique_identifier           |
                      | last_name                   |
                      | first_name                  |
                      | address                     |
                      | date_of_birth               |
                      | gender                      |
                      | gymnasium_id (foreign key)   |
                      +-----------------------------+
                                    |
                                    |
                                    |
                      +-----------------------------+
                      |            Coach            |
                      +-----------------------------+
                      | id                          |
                      | last_name                   |
                      | first_name                  |
                      | age                         |
                      | specialty                   |
                      | session_id (foreign key)     |
                      +-----------------------------+
