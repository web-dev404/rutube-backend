import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { CommentEntity } from '../comment/comment.entity'
import { SubscriptionEntity } from '../user/subscription.entity'
import { UserEntity } from '../user/user.entity'
import { Base } from '../utils/base'

@Entity('Video')

export class VideoEntity extends Base{
	@Column()
	name: string
	
	@Column({default:false, name: 'is_public'})
	isPublic: boolean
	
	@Column({default:0})
	views?: string
	
	@Column({default:0})
	likes?: string
	
	@Column({default:0})
	duration?: string
	
	@Column({default:'', type: 'text'})
	description: string
	
	@Column({default:'', name: 'avatar_path'})
	videoPath: string
	
	@Column({default:'', name: 'thumbnail_path'})
	thumbnailPath: string
	
	@ManyToOne(() => UserEntity,user => user.videos)
	@JoinColumn({name: 'user_id'})
	user: UserEntity[]
	
	@OneToMany(() => SubscriptionEntity,sub => sub.fromUser)
	subscriptions: SubscriptionEntity[]
	
	@OneToMany(() => CommentEntity,comment => comment.video)
	 comments: CommentEntity[]
}