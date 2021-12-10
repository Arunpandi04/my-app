import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn,JoinTable } from 'typeorm';
import Address from './address.entity';
import Post from './post.entity';
 
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public name: string;
 
  @Column()
  public email: string;
 
  @Column()
  public password: string;
 
  @OneToOne(() => Address, (address: Address) => address.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({name: 'Address_id', referencedColumnName: 'id'})
  public address: Address;
 
  @OneToMany(() => Post, (post: Post) => post.author,{
    cascade: true,
    eager: true,
  })
  public posts: Post[];
}
 
export default User;