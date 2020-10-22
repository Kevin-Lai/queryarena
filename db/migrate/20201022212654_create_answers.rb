class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :body, null:false
      t.integer :user_id, null:false
      t.integer :question_id, null:false
      t.timestamps
    end

    add_index :answers, [:user_id, :question_id], unique: true
  end
end
