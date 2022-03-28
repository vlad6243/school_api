import { Column, Table, Model, DataType } from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({
        type: DataType.INTEGER, 
        unique: true, 
        autoIncrement: true, 
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'user email'})
    @Column({
        type: DataType.STRING, 
        unique: true, 
        allowNull: false
    })
    email: string;

    @ApiProperty({example: '123456', description: 'user password'})
    @Column({
        type: DataType.STRING,
        unique: true, 
        allowNull: false
    })
    password: string;

    @ApiProperty({example: 'Jone Doe', description: 'user name'})
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    fullName: string;

    @ApiProperty({example: 'true', description: 'user disabling'})
    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    isActive: boolean;
}