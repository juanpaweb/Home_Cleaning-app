class Properties {
	constructor(
		id,
		address,
    owner,
    email,
		lockbox,
		doorcode,
		type,
		description,
		templateChecklist,
		completedChecklist
	) {
		this.id = id;
		this.address = address;
		this.owner = owner;
		this.email = email;
		this.lockbox = lockbox;
		this.doorcode = doorcode;
		this.type = type;
		this.description = description;
		this.templateChecklist = templateChecklist;
		this.completedChecklist = completedChecklist;
	}
}
export default Properties;
