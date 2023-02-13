import Joi from 'joi';

const schema = Joi.object().keys({
  article0title: Joi.string().required(),
  article0link: Joi.string().uri({ scheme: 'https' }).required(),
  article1title: Joi.string().required(),
  article1link: Joi.string().uri({ scheme: 'https' }).required(),
  article2title: Joi.string().required(),
  article2link: Joi.string().uri({ scheme: 'https' }).required(),
  article3title: Joi.string().required(),
  article3link: Joi.string().uri({ scheme: 'https' }).required(),
  article4title: Joi.string().required(),
  article4link: Joi.string().uri({ scheme: 'https' }).required(),
  article5title: Joi.string().required(),
  article5link: Joi.string().uri({ scheme: 'https' }).required(),
  article6title: Joi.string().required(),
  article6link: Joi.string().uri({ scheme: 'https' }).required(),
  article7title: Joi.string().required(),
  article7link: Joi.string().uri({ scheme: 'https' }).required(),
  article8title: Joi.string().required(),
  article8link: Joi.string().uri({ scheme: 'https' }).required(),
  article9title: Joi.string().required(),
  article9link: Joi.string().uri({ scheme: 'https' }).required(),
  article10title: Joi.string().required(),
  article10link: Joi.string().uri({ scheme: 'https' }).required(),
  article11title: Joi.string().required(),
  article11link: Joi.string().uri({ scheme: 'https' }).required(),
  article12title: Joi.string().required(),
  article12link: Joi.string().uri({ scheme: 'https' }).required(),
  article13title: Joi.string().required(),
  article13link: Joi.string().uri({ scheme: 'https' }).required(),
  article14title: Joi.string().required(),
  article14link: Joi.string().uri({ scheme: 'https' }).required(),
  article15title: Joi.string().required(),
  article15link: Joi.string().uri({ scheme: 'https' }).required(),
  article16title: Joi.string().required(),
  article16link: Joi.string().uri({ scheme: 'https' }).required(),
  article17title: Joi.string().required(),
  article17link: Joi.string().uri({ scheme: 'https' }).required(),
  article18title: Joi.string().required(),
  article18link: Joi.string().uri({ scheme: 'https' }).required(),
  article19title: Joi.string().required(),
  article19link: Joi.string().uri({ scheme: 'https' }).required(),
  article20title: Joi.string().required(),
  article20link: Joi.string().uri({ scheme: 'https' }).required(),
  article21title: Joi.string().required(),
  article21link: Joi.string().uri({ scheme: 'https' }).required(),
  article22title: Joi.string().required(),
  article22link: Joi.string().uri({ scheme: 'https' }).required(),
  article23title: Joi.string().required(),
  article23link: Joi.string().uri({ scheme: 'https' }).required(),
  article24title: Joi.string().required(),
  article24link: Joi.string().uri({ scheme: 'https' }).required(),
  article25title: Joi.string().required(),
  article25link: Joi.string().uri({ scheme: 'https' }).required(),
  article26title: Joi.string().required(),
  article26link: Joi.string().uri({ scheme: 'https' }).required(),
  article27title: Joi.string().required(),
  article27link: Joi.string().uri({ scheme: 'https' }).required(),
  article28title: Joi.string().required(),
  article28link: Joi.string().uri({ scheme: 'https' }).required(),
  article29title: Joi.string().required(),
  article29link: Joi.string().uri({ scheme: 'https' }).required()
});

export const trendingSchemaValidator = (
  trendingObj: Record<string, string>
): Joi.ValidationResult => {
  return schema.validate(trendingObj);
};
