import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { SubscriptionEntity } from '../user/subscription.entity'
import { UserEntity } from '../user/user.entity'
import { Base } from '../utils/base'
import { VideoEntity } from '../video/video.entity'

@Entity('Video')

export class CommentEntity extends Base{
	@Column({type: 'text'})
	message: string
	
	@ManyToOne(() => UserEntity,user => user.videos)
	@JoinColumn({name: 'user_id'})
	user: UserEntity[]
	
	@ManyToOne(() => VideoEntity,video => video.comments)
	@JoinColumn({name: 'video_id'})
	video: VideoEntity[]
}