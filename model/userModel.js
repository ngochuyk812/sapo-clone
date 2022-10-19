const bcrypt = require('bcrypt');

const db = require("../connect/connectDB")

exports.getUser = async (username, callback) => {
	
		db.execute(
		  'SELECT * FROM `user` WHERE username = ?', [username],
		  
		  function(err, results, fields) {
			callback(results)
		  }
		)
};
exports.updateRefreshToken =  ( username, refreshToken)=>{
	db.execute('UPDATE  `user` set refreshToken = ? WHERE username = ?', [refreshToken, username])
}

	
// User.methods.comparePassword = function(password) {
//   return bcrypt.compareSync(password, this.hash_password);
// };

