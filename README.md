# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|
|pass|string|null: false, foreign_key: true|

### Association
- has_many_ :groups, through: :groups_users
- has_many_ :posts
- has_many_ :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|

### Association
- has_many_ :users, through: :groups_users
- has_many_ :posts
- has_many_ :groups_users

## postsテーブル

|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|
|image|string|

### Association
- belongs_to :group

- belongs_to :user






