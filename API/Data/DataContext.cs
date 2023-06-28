using System.Data.Common;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions options) : base(options)
        {

        }
        public DbSet<AppUser> Users { get; set; }
        public DbSet<UserAdd> Adds { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<UserAdd>()
                .HasKey(k => new {k.SourceUserId, k.TargetUserId});

            builder.Entity<UserAdd>()
                .HasOne(s => s.SourceUser)
                .WithMany(a => a.AddedUsers)
                .HasForeignKey(s => s.SourceUserId)
                .OnDelete(DeleteBehavior.Cascade);
            
            
            builder.Entity<UserAdd>()
                .HasOne(t => t.TargetUser)
                .WithMany(a => a.AddedByUsers)
                .HasForeignKey(t => t.TargetUserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}