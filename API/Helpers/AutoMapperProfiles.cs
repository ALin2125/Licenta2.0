using API.DTOs;
using API.Entities;
using API.Extenstions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, DTOs.MemberDto>()
            .ForMember(dest => dest.PhotoUrl, 
                opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, DTOs.PhotoDto>();

            CreateMap<MemberUpdateDto, AppUser>();
            
        }
    }
}