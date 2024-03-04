import supabase from "@/lib/client";

class User {
  constructor() {
    this.collection = "users";
  }

  async inviteUser(email) {
    try {
      const { data, error } = await supabase.auth.admin.inviteUserByEmail(
        email
      );
      console.log(data);
      if (error) return error;
      else {
        return data;
      }
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  }

  async generateUser(email) {
    try {
      const { data, error } = await supabase.auth.admin.generateLink({
        type: "signup",
        email,
        password: "secret",
      });
      console.log(data);
      if (error) return error;
      else {
        return data;
      }
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  }

  async create(data) {
    try {
      const { error } = await supabase.from(this.collection).insert(data);

      if (error) return error;
      else {
        return { success: true };
      }
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  }

  async read(id) {
    try {
      const { data, error } = await supabase
        .from(this.collection)
        .select(`*`)
        .eq("id", id);

      if (error) return error;
      else {
        return data[0];
      }
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }

  async readAll() {
    try {
      const { data, error } = await supabase.from(this.collection).select();

      console.log(data);
      if (error) return error;
      else {
        return data;
      }
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const { error } = await supabase
        .from(this.collection)
        .update(data)
        .eq("id", id);

      if (error) return error;
      else {
        return { success: true };
      }
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const { error } = await supabase
        .from(this.collection)
        .delete()
        .eq("id", id);

      if (error) return error;
      else {
        return { success: true };
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  }
}

export default User;
