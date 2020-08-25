<?php

namespace app\models;

class User extends Model {

    protected $table = 'user';

    public function buscar($name){
        $sql = "select * from {$this->table} where name like ? order by id desc";
        $buscar = $this->connection->prepare($sql);
        $buscar->bindValue(1, '%'.$name.'%');
        $buscar->execute();

        return $buscar->fetchAll();
    }

    public function create($name, $email){
        $sql = "insert into {$this->table} (name, email) values (:name, :email)";
        $create = $this->connection->prepare($sql);
        $create->bindValue(':name', $name);
        $create->bindValue(':email', $email);
        $create->execute();

        return $this->connection->lastInsertId();
    }
}

?>