class CreateUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :upvotes do |t|
      t.integer :user_id, null:false
	    t.integer :answer_id, null:false
      t.timestamps
    end

    add_index :upvotes, [:user_id, :answer_id], unique: true
  end
end
