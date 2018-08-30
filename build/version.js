define([], function(){
	var
		rev = "$Rev: 8e36ced $".match(/[0-9a-f]{7,}/),
		version= {
			major: 1, minor: 14, patch: 1, flag: "",
			revision: rev ? rev[0] : NaN,
			toString: function(){
				var v= version;
				return v.major + "." + v.minor + "." + v.patch + v.flag + " (" + v.revision + ")";
			}
		};
	return version;
});
