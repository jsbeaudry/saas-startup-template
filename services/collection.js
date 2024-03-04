import supabase from "@/libs/client";

let response;

class Collection {
  constructor(name) {
    this.collection = name;
  }

  async post(data) {
    try {
      const { error } = await supabase
        .from(this.collection)
        .insert(data)
        .select();

      if (error) return error;
      else {
        return { success: true };
      }
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  }

  async upPost(data, confictName) {
    try {
      const { error } = await supabase
        .from(this.collection)
        .upsert(data, { onConflict: confictName })
        .select();

      if (error) return error;
      else {
        return { success: true };
      }
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  }

  async get(where = null, selection = "*") {
    try {
      let key = where && Object.keys(where)[0];

      if (where && key && where[key]) {
        response = await supabase
          .from(this.collection)
          .select(selection)
          .eq(key, where[key]);
      } else {
        response = await supabase.from(this.collection).select(selection);
      }
      const { data, error } = response;

      if (error) return error;
      else {
        return data;
      }
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }

  async update(where = null, data = {}) {
    try {
      let key = where && Object.keys(where)[0];

      if (where && key && where[key]) {
        response = await supabase
          .from(this.collection)
          .update(data)
          .eq(key, where[key]);
      } else {
        return { response: "No condition found" };
      }

      const { error } = response;

      if (error) return error;
      else {
        return { success: true };
      }
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  }

  async delete(where) {
    try {
      const { error } = await supabase
        .from(this.collection)
        .delete()
        .eq(where.key, where.value);

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

export default Collection;
